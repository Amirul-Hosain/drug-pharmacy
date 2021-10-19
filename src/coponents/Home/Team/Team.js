import React from 'react';
import './Team.css'
import member2 from '../../../images/team-member/2.jpg';
import member3 from '../../../images/team-member/3.jpg';
import member4 from '../../../images/team-member/4.jpg';
import member5 from '../../../images/team-member/5.jpg';
import member6 from '../../../images/team-member/6.jpg';
import TeamDetail from '../../TeamDetail/TeamDetail';

const Team = () => {
    // const members = [
    //     { id: 1, name: 'amirul', photo: { member2 }, describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.' },
    //     { id: 2, name: 'amirul', photo: { member3 }, describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.' },
    //     { id: 3, name: 'amirul', photo: { member4 }, describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.' },
    //     { id: 4, name: 'amirul', photo: { member5 }, describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.' },
    //     { id: 5, name: 'amirul', photo: { member6 }, describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.' },
    //     { id: 6, name: 'amirul', photo: { member3 }, describe: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.' }
    // ]
    return (
        <div style={{ marginTop: '80px' }}>
            {/* {
                members.map(member => <TeamDetail
                    key={member.id}
                    member={member}
                ></TeamDetail>)
            } */}

            < h2 style={{ marginLeft: '50px', marginBottom: '20px', color: 'orange' }}> Our Team Member</h2 >
            <div className='member-container'>
                <div className='member-detail'>
                    <div>
                        <img className='member-img' src={member2} alt="" />
                    </div>
                    <div className='member-info'>
                        <h4>Devid Benham</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.</p>
                    </div>
                </div>
                <div className='member-detail'>
                    <div>
                        <img className='member-img' src={member3} alt="" />
                    </div>
                    <div className='member-info'>
                        <h4>Devid Benham</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.</p>
                    </div>
                </div>
                <div className='member-detail'>
                    <div>
                        <img className='member-img' src={member4} alt="" />
                    </div>
                    <div className='member-info'>
                        <h4>Devid Benham</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.</p>
                    </div>
                </div>
                <div className='member-detail'>
                    <div>
                        <img className='member-img' src={member5} alt="" />
                    </div>
                    <div className='member-info'>
                        <h4>Devid Benham</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.</p>
                    </div>
                </div>
                <div className='member-detail'>
                    <div>
                        <img className='member-img' src={member6} alt="" />
                    </div>
                    <div className='member-info'>
                        <h4>Devid Benham</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.</p>
                    </div>
                </div>
                <div className='member-detail'>
                    <div>
                        <img className='member-img' src={member3} alt="" />
                    </div>
                    <div className='member-info'>
                        <h4>Devid Benham</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Team;