import React, {EffectCallback, useEffect} from 'react';
import Button from "../../components/button";
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from "../../store/store";
import {increment} from "../../store/slices/counter/counterSlice";

const TestContainer = (): JSX.Element => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    const handleClick = () => dispatch(increment())

    return (
        <div>
            Test Container
            <h1>{count}</h1>
            <Button handleClick={handleClick}/>
        </div>
    )
}

export default TestContainer;
