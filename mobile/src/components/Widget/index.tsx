import React, { useRef, useState } from 'react';
import { ChatCenteredDots } from 'phosphor-react-native';
import { TouchableOpacity, View } from 'react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import BottomSheet from '@gorhom/bottom-sheet';

import { theme } from '../../theme';
import { styles } from './styles';
import { Options } from '../Options';
import { Form } from '../Form';
import { feedbackTypes } from '../../utils/feedbackTypes';
import { Success } from '../Success';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget(){
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null> (null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen () {
    bottomSheetRef.current?.expand();
  }

  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleOpen}
      >
        <ChatCenteredDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedbackSent ?
          <Success onSendAnotherFeedback={handleRestartFeedback}/>
        :
          <>
            {
              feedbackType ? 
                <Form 
                  feedbackType={feedbackType}
                  onFeedbackCanceled={handleRestartFeedback}
                  onFeedbackSent={handleFeedbackSent}
                />  
              :
                <Options onFeedbackTypeChanged={setFeedbackType}/>
            }
          </>
        }

      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget)