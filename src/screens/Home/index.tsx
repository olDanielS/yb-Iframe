import { useState, useCallback } from 'react';
import { View, Text, StatusBar, ActivityIndicator, useWindowDimensions,Alert } from 'react-native';
import { styles, videoHeight, videoPaddingSpace } from './styles';
import YoutubeIframe from 'react-native-youtube-iframe';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function Home() {

	const [videoReady, setVideoReady] = useState(false);
	
	const {width} = useWindowDimensions();
	const videoWidth = width - (videoPaddingSpace*2)

	const onFullScreenChange = useCallback((isFullScreen:boolean) => {
			if(isFullScreen){
				ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
			}else{
				ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
			}
	}, [])
	const onChangeVideo = useCallback((change:string) => {
		console.log(change)
			if(change === 'ended'){
				Alert.alert('Mensagem', 'Video Finalizado')
			}
	}, [])



	return (
		<View style={styles.container}>
			<StatusBar barStyle='light-content' />
			<Text style={styles.title}>Demon Slayer - Tanjiro Rage</Text>
			<View style={styles.player}>
				<YoutubeIframe
					height={videoReady ? videoHeight : 0}
					width={videoWidth}
					videoId="WXiYkZDf4Cw"
					onReady={() => setVideoReady(true)}
					onFullScreenChange={onFullScreenChange}
					onChangeState={onChangeVideo}

				/>
				{!videoReady && <ActivityIndicator
					size={32}
					color="#FF0000"
				/>}
			</View>
		</View>
	)
}