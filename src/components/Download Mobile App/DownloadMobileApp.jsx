const DownloadMobileApp = () => {
    return (
        <div className="pt-20">
            <p className="font-bold text-5xl text-center pb-10">Download Our Mobile App</p>
            <div className="flex justify-center gap-6">
                <a href="https://play.google.com/store/games?hl=en&gl=US">
                    <div>
                        <img className="h-28" src="https://i.ibb.co/QHzRN8s/local-tours-android-app-icon.png" alt="" />

                    </div>
                </a>
                <a href="https://www.apple.com/app-store/">
                    <div>
                        <img className="h-28" src="https://i.ibb.co/CbZ6JHV/local-tours-app-store-icon.png" alt="" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default DownloadMobileApp;