import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Webcam from 'react-webcam';
import { keyframes, styled } from 'styled-components';
import { uploadBase64Image } from '../../firebase';
import { v4 } from 'uuid';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const flashOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const Container = styled.div`
  flex-grow: 1;
  animation: ${fadeIn} 1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const WebcamContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
`;

const Countdown = styled.p`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Flash = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: white;
  animation: ${flashOut} 0.5s ease-in-out;
`;

const Form = styled.form`
  animation: ${fadeIn} 1s ease-in-out;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 12px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 16px;
`;

const Input = styled.input`
  font-size: 16px;
`;

const Button = styled.button``;

export const LogVisitWebcam = ({ onCapture }: { onCapture: () => void }) => {
  const [formData, setFormData] = useState({ name: '' });
  const [countdown, setCountdown] = useState<number | null>(null);
  const [flash, setFlash] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const webcamRef = useRef<Webcam>(null);
  const capture = useCallback(
    async (name: string) => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current?.getScreenshot();
        if (imageSrc) {
          const id = v4();
          localStorage.setItem('id', id);
          await uploadBase64Image(imageSrc, name, id);
        }
        onCapture();
      }
    },
    [webcamRef],
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCountdown(3);
  };

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        const newCountdown = countdown - 1;
        if (newCountdown === 0) {
          setCountdown(null);
          setFlash(true);
          capture(formData.name);
          return;
        }
        return setCountdown(newCountdown);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return (
    <Container>
      <Wrapper>
        <WebcamContainer>
          {countdown && <Countdown>{countdown}</Countdown>}
          {flash && <Flash />}
          <Webcam
            ref={webcamRef}
            style={{ width: '100%', objectFit: 'cover' }}
          />
        </WebcamContainer>
        <Form onSubmit={handleSubmit}>
          <InputContainer>
            <Label htmlFor="name">Name:</Label>
            <Input
              value={formData.name}
              onChange={handleChange}
              required
              type="text"
              name="name"
              id="name"
            />
          </InputContainer>
          <Button type="submit">Save</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
