import React from "react";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import RandomCalendar from "../../components/RandomCalendar";

const Profile: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"miguelslima"}
            name={"Miguel Lima"}
            avatarUrl={"https://avatars0.githubusercontent.com/u/50017221?v=4"}
            followers={888}
            following={8}
            company={"Sem company"}
            location={"Mossoró, Brasil"}
            email={"miguelsousalima@hotmail.com"}
            blog={"https://www.linkedin.com/in/miguelslima1986"}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Random repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"miguelslima"}
                  reponame={"NextLevelWeek-02"}
                  description={"Projeto desenvolvido na Next Level Week 02"}
                  language={n % 3 === 0 ? "JavaScript" : "Typescript"}
                  stars={9}
                  forks={1}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
