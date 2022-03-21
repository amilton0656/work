
const Container = ({w, h, bg, c, b, br, m, p, fs, fw, ta, cn, children}) => {


    return (
        <div
            style={{
                width: w || '100%', 
                height: h || '100%', 
                background: bg || 'transparent', 
                color: c || 'black', 
                border: b || 'none', 
                borderRadius: br || 'none', 
                margin: m || '0 auto', 
                padding: p || '0', 
                fontSize: fs || '1rem', 
                fontWeight: fw || 'normal', 
                textAlign: ta || 'center' 
            }}
            className={cn}
        >
            {children}
        </div>
    )
}

export default Container;