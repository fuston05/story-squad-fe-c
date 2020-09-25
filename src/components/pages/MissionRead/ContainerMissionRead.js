import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocalStorage } from '../../../utils/hooks';

import { getStory } from '../../../api';
import RenderMissionRead from './RenderMissionRead';

const ContainerMissionRead = () => {
  const history = useHistory();

  // URL to the PDF of the story to display
  const [story, setStory] = useState('');

  // holds the current page of the PDF to display
  const [page, setPage] = useState(1);

  // state to track when a user has read the whole story
  const [readingDone, setReadingDone] = useState(false);

  const [curUserId] = useLocalStorage('curUserId', null);
  const [curUserToken] = useLocalStorage('curUserToken', null);
  const id = curUserId;
  const token = curUserToken;

  useEffect(() => {
    getStory(token, id)
      .then(res => {
        setStory(res.data.read);
      })
      .catch(err => console.log({ err }));
  }, [token, id]);

  const missionComplete = e => {
    e.preventDefault();

    history.push('/mission');
  };

  const checkProgress = (e, pageNum, lastPage) => {
    e.preventDefault();
    // advance the page num
    setPage(page + 1);

    // on each click check to see if we have reached the end
    if (pageNum + 1 === lastPage) {
      setReadingDone(true);
    }
  };

  return (
    <RenderMissionRead
      story={story}
      page={page}
      setPage={setPage}
      readingDone={readingDone}
      setReadingDone={setReadingDone}
      checkProgress={checkProgress}
      missionComplete={missionComplete}
    />
  );
};

export default ContainerMissionRead;
