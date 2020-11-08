import styled from "styled-components";

export const Container = styled.div`
display: flex; 
flex-flow: column;

.home {
  &__title {
    text-align: center;
  }
  &__content {
    padding: 1em 0;
  }
  &__list-wrapper {
    margin: auto ;

    &__title {
      font-weight: bold;
      font-size: 20px;
      margin: 1em 0;
    }
  }
  &__list-item {

    &__avatar {
      border-radius: 30%
    }
  }
  &__list-item-steps {
    padding: 1em;

    .ant-steps-item-title {
      line-height: 25px;
      font-size: 11px;
      font-weight: bold;
    }
  }
}
`;
