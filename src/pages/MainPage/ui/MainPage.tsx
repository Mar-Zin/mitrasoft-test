import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/store";
import { hasErrorSelector, isLoadingSelector, postsActions } from "../../../shared/store/posts";
import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/Container';
import PostList from "../../../entities/Posts/PostsList/PostList";
import './MainPage.css'
import { PageLoader } from "../../../widgets/PageLoader/ui/PageLoader";


const MainPage = () => {
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(isLoadingSelector)
    const hasError = useAppSelector(hasErrorSelector)


    useEffect(() => {
        dispatch(postsActions.request())
    }, [dispatch])

    const reloadPage = useCallback(() => {
        window.location.reload();
    }, []); 



    if (isLoading) {
        return <PageLoader/>
    }

    if (hasError) {
        return (
            <>
            <p>Произошла непредвиденная ошибка</p>
            <Button variant="warning" onClick={reloadPage}>Обновить страницу</Button>
            </>
        );
      }

      return (
        <Container>
            <PostList />
        </Container>
    );


};

export default MainPage;
