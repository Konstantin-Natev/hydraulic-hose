import React, { ComponentType, MemoExoticComponent } from "react";

type TrackedProps =
  | "value"
  | "name"
  | "onChange"
  | "onBlur"
  | "value"
  | "value"
  | "error"
  | "helperText"
  | "label"
  | "placeholder"
  | "className"
  | "disabled";

// NOTE: This is optimization for formik, because its creates
// rerender for every field in the form on every change in a single field
// which results in slowness. Here we only update the form if we have some
// changes
export function withMemo<T extends ComponentType<any>>(
  WrappedComponent: T,
  trackedProps: TrackedProps[]
): MemoExoticComponent<T> {
  return React.memo<T>(WrappedComponent, (props, nextProps) => {
    return trackedProps.every((trackedProp) => props[trackedProp] === nextProps[trackedProp]);
  });
}
