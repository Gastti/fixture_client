const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default function Container({ children }) {
    return (
        <div style={styles.container}>
            {children}
        </div>
    );
}