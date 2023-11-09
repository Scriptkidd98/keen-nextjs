'use client'

import { useEffect, useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import styles from './page.module.css'
import '@/app/globals.css'
import coin from '../../../../public/icons/Coin.svg'
import moneybag from '../../../../public/icons/Money-Bag.svg'
import Image from 'next/image';

export default function BudgetSlider() {
  const [sliderValue, setSliderValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  useEffect(() => {
    const sliderThumb = document.querySelector('.budget-slider .MuiSlider-thumb')
    const sliderValueText = `<p class="slider-value-text">${sliderValue}€</p>`

    if (sliderThumb.querySelector("label")) {
      document.querySelector('.slider-value-label').innerHTML = sliderValueText;
    } else {
      const sliderValueLabel = document.createElement("label");
      sliderValueLabel.setAttribute('class', 'slider-value-label')
      document.querySelector('.budget-slider .MuiSlider-thumb').appendChild(sliderValueLabel)
    }

  },[sliderValue])

  return (
    <Box sx={{ height: 400 }} className="budget-slider">
      <Stack spacing={2} direction="column" alignItems="center" style={{height: '100%'}}>
        <div className={styles.budgetSliderPriceIconDiv} style={{marginLeft: '-49px'}}>
            <p style={{width: '44px', marginRight: '5px'}}>100€</p>
            <div className={styles.rangeSliderPointsDiv}>
                <div className={styles.rangeSliderPointsDiv}>
                    <Image
                        src={moneybag}
                        alt='Money Bag Emoji'
                        className={styles.moneybagemoji}
                    />
                </div>
            </div>
        </div>
        <Slider
          orientation="vertical"
          aria-label="Budget"
          defaultValue={50}
          value={sliderValue} 
          onChange={handleSliderChange}
        />
        <div className={styles.budgetSliderPriceIconDiv} style={{marginLeft: '-29px'}}>
            <p style={{width: '19px', marginRight: '10px'}}>0€</p>
            <div className={styles.rangeSliderPointsDiv}>
                <div className={styles.rangeSliderPointsDiv}>
                    <Image
                        src={coin}
                        alt='Coin Emoji'
                        className={styles.coinemoji}
                    />
                </div>
            </div>
        </div>
      </Stack>
    </Box>
  );
};