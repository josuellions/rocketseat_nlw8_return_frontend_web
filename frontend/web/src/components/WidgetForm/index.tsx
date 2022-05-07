import { useState } from "react";
import { ButtonClose } from "../ButtonClose";

import bugImageUrl from '../../assets/icons/bug.svg';
import ideaImageUrl from '../../assets/icons/idea.svg';
import thoughtImageUrl from '../../assets/icons/thought.svg';
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG:{
    title: 'Problema',
    image:{
      source: bugImageUrl,
      alt: 'Imagem de inseto de bug'
    }
  },
  IDEA:{
    title: 'Ideia',
      image:{
        source: ideaImageUrl,
        alt: 'Imagem lâmpada de idea'
    }
  },
  OUTHER: {
    title: 'Outro',
      image:{
        source: thoughtImageUrl,
        alt: 'Imagem de nuvem de pensamento'
    }
  }
}

export type FeedbackTypes = keyof typeof feedbackTypes;

export function WidgetForm() {

  const [ feedbackType, setFeedbackType ] = useState<FeedbackTypes | null >(null);
  const [ feedbackSent, setFeedbackSent ] = useState(false); 

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequest={handleRestartFeedback}/>
      ) : (
        <>
          { !feedbackType ? (
            <FeedbackTypeStep  onFeedbackTypeStepChanged={setFeedbackType}/>
          ) : (
            <FeedbackContentStep  
              feedbackType={feedbackType}
              onFeedbackRestartRequest={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )

      }


      <footer className="text-xs text-neutral-400">
        Feito por <a href="https://rocketseat.com.br" className="underline underline-offset-2">Rocketseat </a> / <a href="https://github.com/josuellions" className="underline underline-offset-2">Josuel Lopes </a>
      </footer>
    </div>
  )
}