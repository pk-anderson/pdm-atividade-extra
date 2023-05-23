import { Box, Text } from "native-base";
import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ContexRecords } from "../../../App";
import { IContexRecords } from "../../types/contexRecords";
import { Records } from "../../types/records";
import { Item } from "../Item";
import { styles } from "./styles";
import { RectangleComponent } from "../RectangleComponent"

export const List = () => {
    const { records } = useContext<IContexRecords>(ContexRecords as any);
    return (
        <>
            <Box style={styles.container}>
                <Text fontSize="lg">Listagem</Text>

                <RectangleComponent
                title="Desenvolvimento de site"
                value={"R$ 12.000,00"}
                valueColor="green"
                subtitle="Vendas"
                date="13/04/2020"
              />
              
              <RectangleComponent
                title="Hamburgueria Pizzy"
                value={"- R$ 59,00"}
                valueColor="red"
                subtitle="Alimentação"
                date="10/04/2020"
              />

            <RectangleComponent
                title="Aluguel do apartamento"
                value={"- R$ 1.200,00"}
                valueColor="red"
                subtitle="Moradia"
                date="10/04/2020"
              />
                <FlatList<Records>
                    data={records as Records[]}
                    renderItem={(item) => (
                        <Box>
                            <Item item={item} />
                        </Box>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </Box>
            
        </>
    );
};
