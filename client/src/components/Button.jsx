const Button = ({label,className,onClick}) =>{
    return(
        <>
        <button onClick={onClick} className={`px-4 py-2 ${className}`}>{label}</button>
        </>
    );
};
export default Button