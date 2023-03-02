import {
  ListWithoutNameProp,
  ValiskProps,
  ConfigEntryProps,
} from "../../types/index";

const deepArray = (array: Array<any>) => {
  let primaryChildrensAreArray = true;

  while (primaryChildrensAreArray) {
    primaryChildrensAreArray = array.some((obj) => Array.isArray(obj));
    array = array.flat();
  }

  return array;
};

export const useConfigEntry = <T>(data: any) => {
  const isArray = Array.isArray(data);
  const arrayWithAllNames: Array<keyof T> = [];
  const arrayAux: Array<ConfigEntryProps<T>> = (
    isArray ? [...deepArray(data)] : [data]
  ).flat();

  const reducerObject: ValiskProps<T> = arrayAux.reduce((prev, curr) => {
    const { nameInput, maskConfig } = curr;
    const prevValue = prev as ValiskProps<T>;
    let formatedObject: ValiskProps<T> = {};

    if (!curr?.maskConfig) return { ...prev, ...formatedObject };

    for (const [key, value] of Object.entries(
      maskConfig as ListWithoutNameProp<T>
    )) {
      const keyMasks = key as keyof ValiskProps<T>;
      const valueMasks = value as any;
      const existMoreSameKeys = Object.hasOwn(prevValue, keyMasks);

      const existNameObject = arrayWithAllNames.includes(nameInput);

      const uniqueProps = { nameInput, ...valueMasks };
      const arrayWithMoreProps = [
        { ...prevValue[keyMasks] },
        { nameInput, ...valueMasks },
      ];

      if (!existNameObject) {
        arrayWithAllNames.push(nameInput);

        formatedObject = {
          [keyMasks]: existMoreSameKeys ? arrayWithMoreProps : uniqueProps,
        };
      }
    }

    return { ...prev, ...formatedObject };
  }, {});

  return reducerObject;
};
