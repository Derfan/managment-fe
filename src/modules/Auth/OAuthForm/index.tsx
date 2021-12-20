import { GoogleIcon, FacebookIcon, GitHubIcon } from './icons';

import cn from './OAuthForm.module.css';

export const OAuthForm = () => {
    return (
        <div className={cn.root}>
            <a href="/facebook"><FacebookIcon /></a>
            <a href="/google"><GoogleIcon /></a>
            <a href="/github"><GitHubIcon /></a>
        </div>
    );
};
