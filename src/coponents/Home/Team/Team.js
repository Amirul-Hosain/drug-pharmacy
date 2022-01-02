import React from 'react';
import './Team.css'
import member2 from '../../../images/team-member/2.jpg';
import member3 from '../../../images/team-member/3.jpg';
import member4 from '../../../images/team-member/4.jpg';
import member5 from '../../../images/team-member/5.jpg';
import member6 from '../../../images/team-member/6.jpg';

const Team = () => {

    return (
        <div style={{ marginTop: '80px' }}>
            < h2 style={{ textAlign: 'center', marginBottom: '20px', color: 'orange' }}> Our Team Member</h2 >


            <div class="">
                <div class="row m-auto container">
                    <div class="member-detail  col-lg-4 col-sm-6 col-12">
                        <div>
                            <img className='member-img' src={member2} alt="" />
                        </div>
                        <div className='member-info'>
                            <h4>Devid Benham</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.</p>
                        </div>
                    </div>
                    <div class="member-detail  col-lg-4  col-sm-6 col-12">
                        <div>
                            <img className='member-img' src={member3} alt="" />
                        </div>
                        <div className='member-info'>
                            <h4>Cherry Shusa</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.</p>
                        </div>
                    </div>
                    <div class="member-detail col-lg-4  col-sm-6 col-12">
                        <div>
                            <img className='member-img' src={member4} alt="" />
                        </div>
                        <div className='member-info'>
                            <h4>Sanjha Yang</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.</p>
                        </div>
                    </div>
                    <div class="member-detail col-lg-4  col-md-6 col-12">
                        <div>
                            <img className='member-img' src={member5} alt="" />
                        </div>
                        <div className='member-info'>
                            <h4>W. Yoat</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.</p>
                        </div>
                    </div>
                    <div class="member-detail col-lg-4  col-md-6 col-12">
                        <div>
                            <img className='member-img' src={member6} alt="" />
                        </div>
                        <div className='member-info'>
                            <h4>John Makarthy</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.</p>
                        </div>
                    </div>
                    <div class="member-detail col-lg-4  col-md-6 col-12">
                        <div>
                            <img className='member-img' src={member2} alt="" />
                        </div>
                        <div className='member-info'>
                            <h4>Briton M.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ducimus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Team;