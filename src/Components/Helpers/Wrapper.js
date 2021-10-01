//Created to avoid having to create div's to wrap JSX
//code. As such, we just render what's inside, using
//props.children

//Still, instead of doing this we can use <React.Fragment></React.Fragment>
//or just <> </>, if project supports last example

const Wrapper = props => {
    return props.children;
}

export default Wrapper