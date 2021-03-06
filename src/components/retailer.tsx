import React from 'react';
import { Button, Tooltip } from '@material-ui/core';
import { useEffect } from 'react';
import { IRetailerStore } from '../types';

export const Retailer: React.FC<IRetailerStore> = (props) => {
  useEffect(() => {
    props.store
      ? (document.title = `Shopping List from ${props.store}`)
      : (document.title = 'Shopping List');
  }, [props.store]);

  return (
    <div>
      <br />

      <div id="retailerButtons" color="primary">
        {props.store ? (
          <div id="reselect">
            <Button
              className="reselectBtn"
              variant="contained"
              color="primary"
              onClick={() => props.setStore('')}
            >
              Re-select
            </Button>
            <br />
            <br />
            <Tooltip title={`Shopping from ${props.store}`}>
              <img
                className="storeImage"
                src={`https://logo.clearbit.com/${props.store}.com.au`}
              ></img>
            </Tooltip>
          </div>
        ) : (
          props.storeList.map((next) => {
            return (
              <Tooltip title={next} key={next}>
                <Button
                  className="retailerBtn"
                  variant="contained"
                  color="primary"
                  key={next}
                  value={next}
                  onClick={() => props.setStore(next)}
                >
                  {
                    <img
                      className="storeImage"
                      src={`https://logo.clearbit.com/${next}.com.au`}
                    ></img>
                  }
                </Button>
              </Tooltip>
            );
          })
        )}
      </div>
    </div>
  );
};
