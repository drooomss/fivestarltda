import Image from 'next/image'
import React from 'react'

interface PageProps {
    searchParams: { [key: string]: string | string[] | undefined }
}



export const VerifyEmailPage = ({ searchParams }: PageProps) => {
    const token = searchParams.token
    const toEmail = searchParams.to
    return (
        <div className='container relative flext pt-20 flex-col items-center justify-cente lg:px-0'>
            <div className='mx-auto flex w-full flex-row-reverse justify-center space-y-6 sm:w-[350px]'>
                {token && typeof token === "string" ? (
                    <div className='grid gap-6'>

                    </div>
                ) : (
                    <div className='flex h-full flex-col items-center justify-center space-y-1'>
                        <div className='relative mb-4 h-60 w-60 text-muted-foreground'>
                            <Image
                                src="mail_enviado.png"
                                fill
                                alt='logo envio de imagen'
                            />
                        </div>
                        <h3 className='font-semibold text-2xl'>
                            Revisa tu Email
                        </h3>
                        {toEmail ? (<p className='text-muted-foreground text-center'>
                            Enviamos un Link de verificación a su {' '}<span className='font-semibold'>
                                {toEmail}
                                </span>
                                .
                        </p>
                        ) : (
                            <p className='text-muted-foreground text-center'>
                                Enviamos un Link de verificacion a tu Email.
                                </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

