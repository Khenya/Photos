import { StyleSheet } from "react-native";

export const colors = {
    black: "#000000",
    blanco: '#FFFFFF',
    plomo: "#808080"
};
export const styles = StyleSheet.create({
    photoContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    text: {
        color: colors.black,
        fontSize: 25,
        fontWeight: 'bold',
        padding: 5,
        left: 10
    },
    memoryContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    memoryImage: {
        width: '90%',
        height: 200,
        borderRadius: 15,
    },
    overlay: {
        position: 'absolute',
        top: 20,
        left: 40,
        justifyContent: 'start',
        alignItems: 'start',

    },
    memoryTitle: {
        fontSize: 18,
        color: colors.blanco,
        fontWeight: 'bold',
    },
    memoryYear: {
        fontSize: 16,
        color: colors.blanco,
    },
    iconsContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        flexDirection: 'row',
    },
    iconButton: {
        marginRight: 10,
    },
    container: {
        flex: 1,
        margin: 20
    },
    grid: {
        justifyContent: 'space-between',
        margin: 10
    },
    itemContainer: {
        width: "50%",
        marginVertical: 10,
        paddingEnd: 15
    },
    image: {
        width: "100%",
        height: 130,
    },
    description: {
        textAlign: "start",
        marginTop: 5,
        fontSize: 20,
    },
    descriptionNI: {
        textAlign: "start",
        marginTop: 5,
        fontSize: 15,
        color: colors.plomo
    },
    horizontalList: {
        flexDirection: 'row',
        marginBottom: 20,
        left: 20
    },
    item: {
        alignItems: 'center',
        marginRight: 10,
    },
    Busquedaimage: {
        width: 130,
        height: 130,
        borderRadius: 0,
        marginBottom: 5,
    },
    imagePerson: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        top: 40,

    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.plomo,
        paddingBottom: 10,
        top: 10,
    },

    settingText: {
        fontSize: 18,
        flex: 1,
    },
    ProfileText: {
        fontSize: 18,
        textAlign: 'center',   
        flex: 1, 
    },
    containerProfile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    profileImageContainer: {
        position: 'relative',
    },
    profileImage: {
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 2,
        borderColor: colors.black,
    },
    cameraButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors.blanco,
        borderRadius: 15,
        padding: 5,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    profileName: {
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.black,
        marginRight: 10,
    },
    editButton: {
        padding: 5,
    },
});