// Import Modules
import { ImageProps } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// *********************** SCREEN PROPS *********************** //

export type RootStackParamList = {
  FamCareIntro: undefined;
  FamCareHistory: undefined;
  FamCareTicket: { ticketId: string };
};

export type FamCareIntroProps = NativeStackScreenProps<
  RootStackParamList,
  'FamCareIntro'
>;

export type FamCareTicketProps = NativeStackScreenProps<
  RootStackParamList,
  'FamCareTicket'
>;

// *********************** DESIGN COMPONENT PROPS *********************** //

export type RightActionInterface = {
  onPress: () => void;
  icon: ImageProps;
};

export type FamButtonProps = {
  text: string;
  icon?: any;
  onClick: () => void;
};

// *********************** COMPONENT PROPS *********************** //

export type ResolvedTicketProps = {
  closed_at: number;
  created_at: number;
  id: string;
  issue_type: string;
  ticket_id: string;
};

export type TicketCardProps = {
  created_at: number;
  estimated_tat: string;
  id: string;
  issue_type: string;
  status: string;
  ticket_id: string;
};

//****  FAM CARE INTRO SCREEN *******//
export type IntroActionButtonProps = {
  text: string;
  icon?: ImageProps;
  onPress: () => void;
};

export type IntroBSOptionProps = {
  text: string;
  subText?: string;
  onPress: () => void;
};
