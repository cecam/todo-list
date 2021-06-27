import styled from '@emotion/styled'

const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 60px;
        letter-spacing: 2px;
        line-height: 100px;
    }
    p {
        font-size: 20px
    }

    @media(max-width: 850px) {
        color: #222831;
        h1 {
            font-size: 30px;
            line-height: 60px;
        }

        p {
            font-size: 16px;
        }
    }
`

const InfoSection = () => {
    return ( 
        <Section>
            <h1>Evaluación práctica</h1>
            <p>Aplicación en react para gestionar un TODO list</p>
        </Section>
    );
}
 
export default InfoSection;