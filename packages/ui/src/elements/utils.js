/* eslint-disable import/prefer-default-export */
export const getColor = (props) => {
  if (props.danger) {
    return props.theme.colors.danger;
  }
  if (props.warning) {
    return props.theme.colors.warning;
  }
  if (props.success) {
    return props.theme.colors.success;
  }
  return props.theme.colors.primary;
};
