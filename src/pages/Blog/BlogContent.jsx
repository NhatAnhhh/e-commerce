import React from "react";
import { styled } from "styled-components";
import { Typography } from 'antd';
const { Title } = Typography;
import blogDress from '@/assets/img/banner/blogDress.svg'

const StyledBlogContent = styled.div`
    width: 50%;
      .article{
        display: flex;
        flex-direction: column;
        width: 86%;
      }
        .title{
      margin-bottom: 0;
      color: #000;
      font-family: Oswald;
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: 68px;
    }
    .paragraph{
      margin-top: 0;
      color: #3F3F3F;
      font-family: Oswald;
      font-size: 25px;
      font-style: normal;
      font-weight: 400;
    }
`;
export const BlogContent = () => {
  return (
    <StyledBlogContent>
      <div className='article'>
        <Title className='title' level={1}>The Dress</Title>
        <p className="paragraph">It’s a tricky thing, being a wedding guest.</p>
        <p className="paragraph">Among the endless list of requirements – buy a present, arrange accommodation, practise your small talk – there’s one obligation that trumps them all in terms of effort: fix up and look sharp.</p>
        <p className="paragraph">The rules surrounding wedding guest dressing are as nuanced as they come.</p>
        <p className="paragraph"> There are some obvious musts – avoiding white is always a good idea – and others that are only acknowledged by serial wedding-goers, such as steering clear of stilettos unless you enjoy the feeling of numbness in your feet.</p>
        <p className="paragraph">In the summer, things get even more complicated. Not only do you have to find a sweat-free way to “dress to the nines”, but you have to strike the right balance between playful sunshine garb and formal occasionwear. This forces you to ask difficult questions, such as “Is this wrap dress more ‘I do’ or ‘BBQ?’” and “Does this hat make me look like a chic French woman, or a dishevelled bird?”</p>
        <p className="paragraph">It’s no mean feat, so here’s our handy guide to summer wedding guest dressing, with tips from industry experts on the trends and colours you need to know about this season .</p>
      </div>
      <img className='dress-img-blog' src={blogDress} alt="" />
      <div className='article'>
        <Title className='title' level={1}>The Dress</Title>
        <p className="paragraph">It’s a tricky thing, being a wedding guest.</p>
        <p className="paragraph">Among the endless list of requirements – buy a present, arrange accommodation, practise your small talk – there’s one obligation that trumps them all in terms of effort: fix up and look sharp.</p>
        <p className="paragraph">The rules surrounding wedding guest dressing are as nuanced as they come.</p>
        <p className="paragraph"> There are some obvious musts – avoiding white is always a good idea – and others that are only acknowledged by serial wedding-goers, such as steering clear of stilettos unless you enjoy the feeling of numbness in your feet.</p>
        <p className="paragraph">In the summer, things get even more complicated. Not only do you have to find a sweat-free way to “dress to the nines”, but you have to strike the right balance between playful sunshine garb and formal occasionwear. This forces you to ask difficult questions, such as “Is this wrap dress more ‘I do’ or ‘BBQ?’” and “Does this hat make me look like a chic French woman, or a dishevelled bird?”</p>
        <p className="paragraph">It’s no mean feat, so here’s our handy guide to summer wedding guest dressing, with tips from industry experts on the trends and colours you need to know about this season .</p>
      </div>
    </StyledBlogContent>
  );
}