import { clients } from '../constants'
import styles, { layout } from '../style';

const Client = () => (
  <section id='clients' className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full sm:flex-row flex-col`}>
      {clients.map((client) => (
        <div key={client.id} className={`${styles.flexCenter} flex-1 sm:min-w-[192px] w-full`} >
          <img src={client.logo} className='sm:w-[192px] w-[180px] sm:mb-0 mb-10 object-contain'/>
        </div>
      ))}
    </div>

  </section>
)

export default Client