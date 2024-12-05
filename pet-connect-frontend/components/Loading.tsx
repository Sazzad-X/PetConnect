export default () => {
    return (
        <div className="h-screen flex items-center justify-center">
          <video loop autoPlay muted>
            <source src="/loadingAnimation.webm" type="video/webm" />
          </video>
        </div>
    );
}