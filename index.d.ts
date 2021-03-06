import { ViewStyle, LayoutAnimationConfig, StyleProp } from "react-native";
import { ReactNode } from "react";

export type KeyboardAccessoryViewRenderProp = ({
  isKeyboardVisible,
}: {
  isKeyboardVisible: boolean;
}) => ReactNode;

export interface KeyboardAccessoryViewProps {
  style?: StyleProp<ViewStyle>;
  animateOn?: "ios" | "android" | "all" | "none";
  animationConfig?: (() => LayoutAnimationConfig) | LayoutAnimationConfig;
  alwaysVisible?: boolean;
  bumperHeight?: number;
  visibleOpacity?: number;
  onKeyboardShowDelay?: boolean | number;
  hiddenOpacity?: number;
  hideBorder?: boolean;
  inSafeAreaView?: boolean;
  androidAdjustResize?: boolean;
  avoidKeyboard?: boolean;
  children: KeyboardAccessoryViewRenderProp | ReactNode;
}

export declare const KeyboardAccessoryView: React.ComponentType<KeyboardAccessoryViewProps>;

export type KeyboardAccessoryNavigationArrowDirection =
  | "down"
  | "up"
  | "right"
  | "left";

export interface KeyboardAccessoryNavigationProps
  extends KeyboardAccessoryViewProps {
  doneButtonTitle?: string;
  tintColor?: string;
  doneButton?: ReactNode;
  nextButton?: ReactNode;
  previousButton?: ReactNode;
  infoContainer?: ReactNode;
  doneDisabled?: boolean;
  nextDisabled?: boolean;
  previousDisabled?: boolean;
  doneHidden?: boolean;
  nextHidden?: boolean;
  previousHidden?: boolean;
  accessoryStyle?: StyleProp<ViewStyle>;
  doneButtonStyle?: StyleProp<ViewStyle>;
  doneButtonTitleStyle?: StyleProp<ViewStyle>;
  infoMessageStyle?: StyleProp<ViewStyle>;
  previousButtonStyle?: StyleProp<ViewStyle>;
  nextButtonStyle?: StyleProp<ViewStyle>;
  nextButtonDirection?: KeyboardAccessoryNavigationArrowDirection;
  previousButtonDirection?: KeyboardAccessoryNavigationArrowDirection;
  onDone?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

export declare const KeyboardAccessoryNavigation: React.ComponentType<KeyboardAccessoryNavigationProps>;

export interface KeyboardAwareTabBarComponentProps {
  TabBarComponent: React.ComponentType<any>;
  [x: string]: any;
}

export declare const KeyboardAwareTabBarComponent: React.ComponentType<KeyboardAwareTabBarComponentProps>;
