//https://api.npoint.io/7336b2444331b29dae43
import { useState } from "react";
import axios from "axios";

export const App = () => {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClickFetchUser = () => {
    setIsLoading(true);
    setIsError(false);

    axios
      .get("https://api.npoint.io/7336b2444331b29dae43")
      .then((result) => {
        const users = result.data.map((user) => ({
          id: user.id,
          name: `${user.name}`,
          age: user.age
        }));
        setUserList(users);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };

  return (
    <div>
      <button onClick={onClickFetchUser}>사용자정보얻기</button>
      {/* 에러 플래그 켜지면 에러 출럭 */}
      {isError && <p style={{ color: "red" }}>에러발생</p>}
      {/* 로딩중 표시 */}
      {isLoading ? (
        <p>데이터 가져오는 중</p>
      ) : (
        userList.map((user) => (
          <p key={user.id}>{`${user.id}:${user.name}(age:${user.age})`}</p>
        ))
      )}
    </div>
  );
};
