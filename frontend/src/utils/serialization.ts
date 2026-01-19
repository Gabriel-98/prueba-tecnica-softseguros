export const replacer = (key: any, value: any) => {
  console.log("...", "key=", key, "value=", value);
  if (value instanceof Map) {
    console.log("out:", {
      __type: "Map",
      value: Array.from(value),
    });
    return {
      __type: "Map",
      value: Array.from(value),
    };
  }
  return value;
};

export const reviver = (key: string, value: any) => {
  if (value?.__type === "Map") {
    return new Map(value.value);
  }
  return value;
};