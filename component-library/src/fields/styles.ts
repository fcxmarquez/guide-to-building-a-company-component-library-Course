import styled from 'styled-components';
import { transparentize } from 'polished';
import {
  SECONDARY_COLOR,
  SECONDARY_TEXT_COLOR,
  PRIMARY_COLOR,
  DISABLED_OPACITY,
} from '../utils/styles';
import { TextAreaProps } from './TextArea';

export const LabelWrapper = styled.label`
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const InputWrapper = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.4rem;
  font-size: 1rem;
  line-height: 1.5;
  color: ${SECONDARY_TEXT_COLOR};
  background-color: transparent;
  border: 1px solid ${SECONDARY_COLOR};
  appearance: none;
  border-radius: 0;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${PRIMARY_COLOR};
    box-shadow: 0 0 0 0.2rem ${transparentize(0.75, PRIMARY_COLOR)};
  }

  &:disabled {
    background-color: ${SECONDARY_COLOR};
    opacity: ${DISABLED_OPACITY};
  }
`;

export const StyledTextArea = styled(InputWrapper as 'textarea').attrs({
  as: 'textarea',
})<TextAreaProps>`
  resize: ${(props) => !props.isResizable && 'none'};
`;
