const Container = ({ children, className = '' }) => {
    return (
        <div className={`md:px-[40px] xl:px-[2rem] 2xl:px-[8.5vw] px-[15px] md:px-20 mx-auto w-full ${className}`}>
            {children}
        </div>
    );
};

export default Container;