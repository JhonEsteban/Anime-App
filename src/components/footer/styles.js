import styled from 'styled-components';

const FooterSection = styled.footer`
  width: 100%;
  padding: 50px 10px;
  background-color: black;
  color: white;
  text-align: center;
  margin-top: 50px;
`;

const FooterDescription = styled.h4`
  color: white;
  font-size: 1.8rem;
  line-height: 25px;
`;

const FooterLogo = styled.img`
  width: 60px;
  border-radius: 50%;
  margin: auto;
`;

const DevelopedBy = styled.span`
  display: block;
`;

const Profession = styled.span`
  display: block;
  margin-top: 5px;
`;

export {
  FooterSection,
  FooterLogo,
  FooterDescription,
  DevelopedBy,
  Profession,
};
