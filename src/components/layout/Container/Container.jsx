const Container = ({ children, className = '' }) => {
    return (
        <div className={`xl:px-[2rem] 2xl:px-[10rem] px-[15px] md:px-20 mx-auto w-full ${className} new-container`}>
            {children}
        </div>
    );
};

export default Container;