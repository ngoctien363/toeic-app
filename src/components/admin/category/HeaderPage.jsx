import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input, Button, Typography } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
const { Search } = Input;

const HeaderPage = ({ title = '', actions = 'default', onAdd = true, onCreate, onBack = false, search = false }) => {
  const onSearch = (text) => {
  };

  const styleButton = {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    marginRight: "10px",
  };

  const backToPrevPage = () => {
    window.history.back()
  }

  return (
    <div className="header-page">
      <Row className="wrapper" justify="space-around" align="center">
        <Col>
        {
          onBack && 
            <Button style={styleButton} onClick={backToPrevPage}>
              <FontAwesomeIcon className='faCaretLeft' icon={faCaretLeft} />
            {'Back'}
            </Button>
        }
        </Col>
        <Col className="header-page__title">
          <Typography.Title level={3}>{title}</Typography.Title>
        </Col>
        <Col flex={1} style={{ textAlign: 'right' }}>
          {actions === 'default' && (
            <Row
              style={{
                display: 'flex',
                flexWrap: 'nowrap',
                gap: '16px',
                justifyContent: 'end',
              }}
            >
              {
                search && <Search className="header-page__search" placeholder="Search..." onSearch={onSearch} enterButton />
              }
              {
                onCreate && onAdd && <Button /** className='btnBack' */ type='primary' style={styleButton} onClick={() => onCreate()} icon={<PlusCircleOutlined />}>
                {'Create'}
              </Button>
              }
            </Row>
          ) }
        </Col>
      </Row>
    </div>
  );
};

HeaderPage.propTypes = {
  /**
   * options data for ribbon
   */
  title: PropTypes.string,
  // actions: PropTypes.oneOf([PropTypes.string, PropTypes.func, PropTypes.bool]),
  onCreate: PropTypes.func,
};

export default HeaderPage;
