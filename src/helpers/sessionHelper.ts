import { handleCompleteSyllables } from "./sessions/complete-syllable";
import { handleCreateWord } from "./sessions/create-word";
import { handleFingerContable } from "./sessions/finger-contable";
import { handleIdentifyImage } from "./sessions/identify-image";
import { handleSelectImage } from "./sessions/select-image";

async function generate(level: string, activitySlug: string) {
  const configs = await loader(activitySlug);
  const content = getFromLevel(level, configs);
  const session = getRandomElements(content.elements, content.maxItems);
  return session.map((s: any) => {
    const type = getType(content.options);
    return getContentByType(type, s, content);
  });
}

function getContentByType(type: string, s: any, content: any) {
  if (type === "complete-syllable") {
    return handleCompleteSyllables(type, s, content);
  }

  if (type === "identify-image") {
    return handleIdentifyImage(type, s, content);
  }

  if (type === "select-image") {
    return handleSelectImage(type, s, content);
  }

  if (type === "finger-contable") {
    return handleFingerContable(type, s, content);
  }

  if (type === "create-word") {
    return handleCreateWord(type, s, content);
  }
}

function getRandomElements<T>(array: T[], quantity: number): T[] {
  if (quantity > array.length) {
    throw new Error("Quantity cannot be greater than the length of the array");
  }

  const result: T[] = [];
  const usedIndices = new Set<number>();

  while (result.length < quantity) {
    const randomIndex = Math.floor(Math.random() * array.length);
    if (!usedIndices.has(randomIndex)) {
      result.push(array[randomIndex]);
      usedIndices.add(randomIndex);
    }
  }

  return result;
}

function getFromLevel(level: string, content: any) {
  return content.find((x: any) => x.difficulty == level);
}

async function loader(activitySlug: string) {
  try {
    const data = await import(
      `@/assets/activities/details/${activitySlug}.json`
    );
    return data.default;
  } catch (err) {
    console.error("Error loading JSON file:", err);
    return null;
  }
}

function getType(configs: any) {
  let randomNumber = Math.random();
  let chooseType = configs[0].type;

  for (let j = 0; j < configs.length; j++) {
    const type = configs[j];
    if (randomNumber < type.possibility) {
      chooseType = type.type;
      break;
    }
    randomNumber -= type.possibility;
  }

  return chooseType;
}

export { generate };
