import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { deepPurple } from "@mui/material/colors"
import { IChildren } from "../../../types/IChildren"



export const MenuLateral = ({children}: IChildren) => {

    const theme = useTheme()
    

    return (
        <>
            <Drawer open ={true} variant='permanent'>
                <Box
                   width={theme.spacing(28)}
                    height='100%'
                    display='flex'
                    flexDirection='column'
                >
                    <Box
                        width='100%'
                        height={theme.spacing(20)}
                        display='flex'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Avatar 
                            sx={
                                {
                                    height: theme.spacing(12),
                                    width: theme.spacing(12),
                                    bgcolor: deepPurple[500]
                                }
                            }>
                            OP
                        </Avatar>
                    </Box>
                    <Divider />
                    
                    <Box flex={1}>
                        <List component='nav'>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary='Página Inicial'/>
                            </ListItemButton>
                        </List>

                    </Box>


                </Box>
            </Drawer>
            <Box height='100vh' marginLeft={theme.spacing(28)}>
                {children}
            </Box>
        </>
        
    )
}