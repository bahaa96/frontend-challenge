import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

const Header: React.FC<{}> = () => {
  return (
    <Container className={'header'}>
      <div className={'header__navbar'}>
        <div className={'header__navbar__logo'}>
          <img alt={'logo'} src={'https://global-uploads.webflow.com/5f6712910e69d49b184699e7/5f6713eb0e69d46f5646a09c_Logo_blue_quer-p-500.png'} />
        </div>
        <div className={'header__navbar__links'}>
          <ul>
            <li>
              <a href={'#'}>
                Find jobs 
              </a>
            </li>
            <li>
              <a href={'#'}>
                Browse startups
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Row className={'header__content'}>
        <Col span={8}>
          <div className={'header__searchbox'}>
            <div className={'header__input-wrapper'}>
              <SearchOutlined className={'header__input-wrapper__icon'} />
              <input placeholder={'Job title or keyword'} /> 
            </div>
            <button>
              <p>
                Search
              </p>
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const Container = styled.div`
  background-color: #E7F6FC;
  border-radius: 0 0 0 50px;
  padding: 1.5em 2em;


  .header {
    &__navbar {
      display: flex;
      justify-content: space-between;

      &__logo {
        width: 150px;

        img {
          width: 100%;
        }
      }
      &__links {
        ul {
          display: flex;
          list-style-type: none;
          padding: 0;

          li {
            margin: 0 .5em;
            font-weight: 500;
            padding-bottom: 0.75em;

            a {
              color: #000;
            }
            
            &:nth-child(1) {
              border-bottom: 2px solid #59666D;
            }
          }
        }
      }
    }

    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__searchbox {
      display: flex;
      padding: 1em;
      background-color: #fff;
      border-radius: 5px;
      margin: 3em 0;
      box-shadow: 0 25px 40px -23px rgba(0,0,0,0.25);

      
      button {
        background-color: #4337E3;
        border: 0;
        border-radius: 5px;
        padding: 1em 3em ;

        p {
          margin: 0;
          color: #fff;
          font-weight: 500;
          letter-spacing: 0.25px;
        }
      }
    }

    &__input-wrapper {
      display: flex;
      flex: 1;
      align-items: center;

      &__icon {
        font-size: 20px;
      }

      input {
        border: 0;
        flex: 1;
        padding: 1em;
        /* width: 95%; */
      }

    }
  }
`


export default React.memo(Header);