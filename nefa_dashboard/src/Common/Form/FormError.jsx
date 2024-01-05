const FormError = ({ show, error }) => {
    return (
        <div>
            {show &&
                <p className="text-red font-medium">{error}</p>
            }
        </div>
    );

}
export default FormError;