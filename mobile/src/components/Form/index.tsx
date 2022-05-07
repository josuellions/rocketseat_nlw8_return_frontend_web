import React, { useState } from 'react';
import {  
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';
import { ArrowArcLeft } from 'phosphor-react-native';

import { captureScreen } from 'react-native-view-shot';

import * as FileSystem from 'expo-file-system';

import { FeedbackType } from '../../components/Widget'
import { feedbackTypes } from '../../utils/feedbackTypes';
import { ButtonScreenshot } from '../ButtonScreenshot';
import { Button } from '../Button';

import { styles } from './styles';
import { theme } from '../../theme';
import { api } from '../../libs/api';

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackSent, onFeedbackCanceled }:Props){
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendFeedback, setIsSendFeedback] = useState(false);
  const [comment, setComment] = useState('');

  function handleScreenshot() {
    captureScreen({
      format: 'jpg',
      quality: 0.8
    })
      .then(uri => {
        console.log(uri);
        setScreenshot(uri)
    })
      .catch(error => console.log(error))
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  async function handleSendFeedback(){
    if(isSendFeedback){
      setIsSendFeedback(false)
      return;
    }

    setIsSendFeedback(true);

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot,{
      encoding: 'base64'
    })

    try {
      await api.post('/feedbacks',{
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment
      });

      onFeedbackSent();

    } catch (error) {
      console.log(error);
      setIsSendFeedback(false);
    }
  }

 return (
  <View style={styles.container}>
    
    <View style={styles.header}>
      <TouchableOpacity onPress={onFeedbackCanceled}>
        <ArrowArcLeft
          size={24}
          color={theme.colors.text_secondary}
        />
      </TouchableOpacity>

      <View style={styles.titleContainer}>
        <Image style={styles.image}  source={feedbackTypeInfo.image}/>
        <Text style={styles.titleText}>
          {feedbackTypeInfo.title}
        </Text>
      </View>

    </View>

    <TextInput 
      multiline
      autoCorrect={false}
      style={styles.input}
      placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
      placeholderTextColor={theme.colors.text_secondary}
      onChangeText={setComment}
    />

    <View style={styles.footer}>
      <ButtonScreenshot 
        onTakeShot={handleScreenshot}
        onRemoveShot={handleScreenshotRemove}
        screenshot={screenshot}
      />

      <Button 
        onPress={handleSendFeedback}
        isLoading={isSendFeedback}
      />
    </View>

  </View>
 );
}