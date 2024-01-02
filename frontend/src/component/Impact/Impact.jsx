import React from 'react';
import "./Impact.css";
import Skills from '../Skills/Skills';

const Impact = () => (
    <div className='about section__padding'>
        <div className='container'>
            <div className='about__content text__center'>
                <h2 className='section__title text__cap'>Scouting’s impact on the development of young people</h2>
                <p className='para__text text__grey'>By joining Scouting and taking part in a values-based, fun and challenging programme of educational activities young people develop a wide range of key skills and behaviours.

Two impact studies, validated by an external evaluator, were carried out in 2018 (Kenya, Singapore, United Kingdom) and 2019 (France, Mexico, The Netherlands and Saudi Arabic) to measure the effect of Scouting on the personal development of young people.

Scouts were compared with non-Scouts peers aged 14 to 17, across a set of skills, attitudes, knowledge and behaviour considered to be developed through Scouting.

Both studies showed Scouts out-performed non-Scout peers in nearly every category of personal development measured. Among the key findings:</p>
               <Skills/>
               <h2 className='section__title text__cap'> Scouting’s impact on society</h2>
               <p className='para__text text__grey'>Through Scouting, young people learn to take responsibility for their own actions, for others and for the environment and society at large.

Scouting empowers young people with skills, knowledge and values, and promotes teamwork, service action and active citizenship.

And Scouting enables incredible social impact  — in the 57 million current active Scouts worldwide, and in the (estimated) 500+ million Scouts alive today who have actively participated in the Scout programme and continue to drive positive change as active citizens.</p>
            </div>
        </div>
    </div>
)

export default Impact;