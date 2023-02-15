import {
  ListWithoutNameProp,
  MaskTypesParams,
  ObjectWithNameAndListProps,
} from "../../types/index";

const deepArray = (array: Array<any>) => {
  let primaryChildrensAreArray = true;

  while (primaryChildrensAreArray) {
    primaryChildrensAreArray = array.some((obj) => Array.isArray(obj));
    array = array.flat();
  }

  return array;
};

export const configEntry = <T>(data: any) => {
  const isArray = Array.isArray(data);
  const arrayWithAllNames: Array<keyof T> = [];
  const arrayAux: Array<ObjectWithNameAndListProps<T>> = (
    isArray ? [...deepArray(data)] : [data]
  ).flat();

  const reducerObject: MaskTypesParams<T> = arrayAux.reduce((prev, curr) => {
    const { name, props } = curr;
    const prevValue = prev as MaskTypesParams<T>;
    let formatedObject: MaskTypesParams<T> = {};

    if (!curr?.props) return { ...prev, ...formatedObject };

    for (const [key, value] of Object.entries(
      props as ListWithoutNameProp<T>
    )) {
      const keyMasks = key as keyof MaskTypesParams<T>;
      const valueMasks = value as any;
      const existMoreSameKeys = Object.hasOwn(prevValue, keyMasks);

      const existNameObject = arrayWithAllNames.includes(name);

      const uniqueProps = { name, ...valueMasks };
      const arrayWithMoreProps = [
        { ...prevValue[keyMasks] },
        { name, ...valueMasks },
      ];

      if (!existNameObject) {
        arrayWithAllNames.push(name);

        formatedObject = {
          [keyMasks]: existMoreSameKeys ? arrayWithMoreProps : uniqueProps,
        };
      }
    }

    return { ...prev, ...formatedObject };
  }, {});

  return reducerObject;
};
