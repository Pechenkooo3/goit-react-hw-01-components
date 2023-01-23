import styled from 'styled-components';

export const Card = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border: 1px solid rgb(199, 199, 235);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 2px 3px 0px, rgb(0 0 0 / 12%) 0px 1px 6px 0px;
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const UserImage = styled.img`
  border-radius: 100%;
`;

export const UserName = styled.h3`
  font-size: 32px;
  font-weight: 600;
  margin-bottom:0px;
`;

export const UserTag = styled.p`
  color: grey;
  font-size: 20px;
  font-weight: 40px;
   margin-bottom:0px;
`;

export const UserLocation = styled.p`
  color: grey;
  font-size: 20px;
  font-weight: 40px;
   margin-bottom:0px;
`;

export const StatsList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 2px grey;
  padding: 0px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
  outline: 1px solid grey;
  padding: 20px 0;
  background-color: rgb(161, 157, 157);
`;

export const StatsLabel = styled.p`
  color: white;
  margin: 0px
  padding-bottom: 4px
`;

export const StatsQuantity = styled.p`
  color: black;
  font-weight: 600;
  margin: 0px;
`;