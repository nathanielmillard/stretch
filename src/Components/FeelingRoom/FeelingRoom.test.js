import { render, screen } from '@testing-library/react';
import FeelingRoom from './FeelingRoom';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { fineBackgroundAnimation, floatAnimation } from './fineAnimations.js';
jest.mock('./fineAnimations.js');

describe('FeelingRoom', ()=>{
  describe('Unit Tests', () => {
    test('Should render a FeelingRoom', () => {
      const currentMood = 'Fine'
      render (
        <MemoryRouter>
          <FeelingRoom
            mood={currentMood}
          />
        </MemoryRouter>
      )
      const welcomeMessage = screen.getByText("Welcome to the feeling room");
      expect(welcomeMessage).toBeInTheDocument();
      const startButton = screen.getByTestId("startButton");
      expect(startButton).toBeInTheDocument();
    });
  })
  describe('Integration Tests', () => {
    test('Should not display the welcome message or start button after animation has begun', () => {
      const currentMood = 'Fine'
      render (
        <MemoryRouter>
          <FeelingRoom
            mood={currentMood}
          />
        </MemoryRouter>
      )
      const welcomeMessage = screen.getByText("Welcome to the feeling room");
      expect(welcomeMessage).toBeInTheDocument();
      const startButton = screen.getByTestId("startButton");
      expect(startButton).toBeInTheDocument();
      userEvent.click(startButton);
      expect(startButton).not.toBeInTheDocument()
      expect(welcomeMessage).not.toBeInTheDocument()
    });
    test('Should invoke the animation function after the start button has been clicked', () => {
      const currentMood = 'Fine'
      render (
        <MemoryRouter>
          <FeelingRoom
            mood={currentMood}
          />
        </MemoryRouter>
      )
      const welcomeMessage = screen.getByText("Welcome to the feeling room");
      expect(welcomeMessage).toBeInTheDocument();
      const startButton = screen.getByTestId("startButton");
      expect(startButton).toBeInTheDocument();
      userEvent.click(startButton);
      expect(fineBackgroundAnimation).toHaveBeenCalled();
      expect(floatAnimation).toHaveBeenCalledWith('#fineCircle1', 1);
      expect(floatAnimation).toHaveBeenLastCalledWith('#fineCircle12', 1);
    });

  })
})
