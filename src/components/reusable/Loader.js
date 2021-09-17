import styled from 'styled-components';
const Loader = () => {
    const Image = styled.div`
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid rgb(99,0, 163);
    width: 15vw;
    height: 15vw;
    margin: auto;
    animation: spin 2s linear infinite;
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `
    return(
        <Image />
    );
}
export default Loader;