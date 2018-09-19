import React from 'react';
import { Wrapper, Loader } from './styles';
import LoadingImage from '../../assets/img/loading.gif';

const SmallLoader = () => (
    <Wrapper>
        <Loader src={LoadingImage}/>
    </Wrapper>
)

export default SmallLoader;