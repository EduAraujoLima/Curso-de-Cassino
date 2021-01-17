import './Main.scss';
import Card from './Card';
import sentinel from '../assets/sentinel.jpg';
import layouts from '../assets/layouts.jpg';
import setups from '../assets/setups.png';
import tactics from '../assets/tactics.png';

export default function main() {
    return(
        <div className="main">
            <div className="img-bg">
                <div className="title">
                    <h2>
                        Curso de Cassino
                    </h2>
                </div>
            </div>
            <div className='description'>
                <h1>
                   Aprenda de uma vez por todas como se tornar um milionário no GTA ONLINE.
                </h1>
                <h4>
                    De forma totalmente rápida, legitima e sem chances de banimento com ganhos de até
                </h4>
                <h1>
                   $ 10.000.000 por dia
                </h1>

                <button className="want-btn">
                    Quero ser um Cassineiro
                </button>
            </div>

            <div className='description-cards m-4'>
                <h3 className="pl-3">
                    Aprenda técnicas usadas por profissionais
                </h3>
                <div className="card-list px-3 py-3">
                    <Card 
                        text={'Melhores rotas para fuga.'}
                        img={sentinel}
                    />
                    <Card
                        text={'Vire mestre em todos os alvos e layouts.'}
                        img={layouts}  
                    />
                    <Card
                        text={'Faça preparatórias em tempo recorde.'}
                        img={setups}  
                    />
                    <Card
                        text={'Faça o golpe em todas as táticas.'}
                        img={tactics}  
                    />

                </div>
            </div>

            <div className="buy-price">
                <div className="left">
                    <h2>
                        Tudo isso de
                    </h2>
                    <h3>
                        <s>
                            R$ 1.400,00 
                        </s>
                        por
                    </h3>
                    <h1>
                        R$ 100,00
                    </h1>
                </div>
                <div className="right">
                    <form>
                        <input 
                            type="text"
                            placeholder="Insira seu discord..."
                        />
                        <button className="want-btn">
                            Quero ser um Cassineiro
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}