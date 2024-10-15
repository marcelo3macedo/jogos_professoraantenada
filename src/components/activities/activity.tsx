"use client";
import CompleteSyllable from "./models/completeSyllable";
import CreateWord from "./models/createWord";
import FingerContable from "./models/fingerContable";
import IdentifyImage from "./models/identifyImage";

export default function Activity({
  session,
  question,
}: {
  readonly session: any;
  readonly question: any;
}) {
  const ActionTypes = {
    COMPLETE_SYLLABLE: "complete-syllable",
    CREATE_WORD: "create-word",
    IDENTIFY_IMAGE: "identify-image",
    FINGER_CONTABLE: "finger-contable",
  };

  switch (session.type) {
    case ActionTypes.COMPLETE_SYLLABLE:
      return <CompleteSyllable question={question} session={session} />;
    case ActionTypes.CREATE_WORD:
      return <CreateWord question={question} session={session} />;
    case ActionTypes.IDENTIFY_IMAGE:
      return <IdentifyImage question={question} session={session} />;
    case ActionTypes.FINGER_CONTABLE:
      return <FingerContable question={question} session={session} />;
    default:
      return <></>;
  }
}
