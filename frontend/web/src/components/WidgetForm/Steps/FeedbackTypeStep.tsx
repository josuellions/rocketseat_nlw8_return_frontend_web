import { feedbackTypes, FeedbackTypes } from '..'
import { ButtonClose } from '../../ButtonClose';

interface FeedbackTypeStepProps {
  onFeedbackTypeStepChanged: (type: FeedbackTypes) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeStepChanged }: FeedbackTypeStepProps){
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <ButtonClose/>
      </header>

      <div className="flex py-8 gap-2 w-full">
        { Object.entries(feedbackTypes).map(([key, value]) => {
            return (
              <button
                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                onClick={() => onFeedbackTypeStepChanged(key as FeedbackTypes)}
                type="button"
                key={key}
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span>
              </button>
            );
          }
        )}
      </div>
    </>
  )
}