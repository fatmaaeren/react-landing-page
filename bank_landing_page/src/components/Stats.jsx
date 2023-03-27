import { stats } from '../constants';
import styles from '../style';

const Stats = () => (
  <section className={`${styles.flexCenter} flex-col sm:flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => (
      <div key={stat.id} className={ `flex flex-start flex-row  items-center flex-1`} >
        <h4 className='font-poppins font-semibold xs:text-[40px] text[30px] xs:leading-[53px] leading-[43px] text-white ml-3' >{stat.value}</h4>
        <p className='font-poppins font-normal xs:text-[20px] text[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3' >{stat.title}</p>
      </div>
    ))}
  </section>
)

export default Stats