import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styled from 'styled-components';


// Styled Components
const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
  margin: 10px;
`;

const ToggleIcon = styled.div`
  font-size: 18px;
`;

const Header = styled.div`
  padding: 15px;
  background-color: #ffffff;
  border: 1.2px solid #cccccc;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

const Content = styled.div`
  transition: height 0.3s ease;
  overflow: hidden;
  background-color: #fff;
`;

const ContentInner = styled.div`
  padding: 15px;
`;

interface AccordionProps {
  title: React.ReactNode;
  isOpen: boolean;
  toggleExpanded: () => void;
  children: React.ReactNode;
}

export const Accordion: React.FC<AccordionProps> = ({ title, isOpen, toggleExpanded, children }) => {
  const [height, setHeight] = useState<number | 'auto'>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight || 'auto');
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <>
    <Container>
      <Header onClick={toggleExpanded}>
        <div>{title}</div>
        {/* {isOpen ? <ChevronUp style={{ fontSize: '18px' }} /> : <ChevronDown style={{ fontSize: '18px' }} />} */}
        <ToggleIcon as={isOpen ? ChevronUp : ChevronDown} />
      </Header>
      <Content
        ref={contentRef}
        style={{
          height: isOpen ? height : 0,
        }}
        >
        <ContentInner>{children}</ContentInner>
      </Content>
    </Container>
  </>
  );
};
